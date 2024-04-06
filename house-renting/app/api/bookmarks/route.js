import connectDB from "@/config/database";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";
import Property from "@/models/Property";

export const dynamic = "force-dynamic";

// GET /api/bookmarks
export const GET = async (request) => {
  try {
    await connectDB();
    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.userId) {
      return new Response("User ID is required !", { status: 401 });
    }
    const { userId } = sessionUser;
    // Find user in database
    const user = await User.findOne({ _id: userId });

    // Get users bookmarks
    const bookmarks = await Property.find({ _id: { $in: user.bookmarks } });
    return new Response(JSON.stringify(bookmarks), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong ...", { status: 500 });
  }
};
export const POST = async (request) => {
  try {
    await connectDB();
    const { propertyId } = await request.json();
    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
      return new Response("User ID is required !", { status: 401 });
    }
    const { userId } = sessionUser;
    // Find user in database
    const user = await User.findOne({ _id: userId });
    // check if user is bookmarked
    let isBookmarked = user.bookmarks.includes(propertyId);
    let message;
    if (isBookmarked) {
      // If already bookmarked, remove it
      user.bookmarks.pull(propertyId);
      message = "Bookmark removed successfully";
      isBookmarked = false;
    } else {
      user.bookmarks.push(propertyId);
      message = "Book mark added successfully";
      isBookmarked = true;
    }
    await user.save();
    return new Response(JSON.stringify({ message, isBookmarked }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
