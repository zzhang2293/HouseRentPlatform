import connectDB from "@/config/database";
import Property from "@/models/Property";

// GET /api/featured/properties
export const GET = async (request) => {
  try {
    await connectDB();
    const properties = await Property.find({ is_featured: true });

    return new Response(JSON.stringify(properties), {
      status: 200,
    });
  } catch (error) {
    return new Response("something might wrong", { status: 500 });
  }
};
