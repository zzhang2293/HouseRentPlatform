import connectDB from "@/config/database";
import Property from "@/models/Property";

// GET /api/properties/search

export const GET = async (request) => {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const location = searchParams.get("location");
    const propertyType = searchParams.get("propertyType");
    const locationPattern = new RegExp(location, "i");
    // match location pattern against database field
    let query = {
      $or: [
        { name: locationPattern },
        { description: locationPattern },
        { "location.street": locationPattern },
        { "location.city": locationPattern },
        { "location.state": locationPattern },
        { "location.zipcode": locationPattern },
      ],
    };

    // only check for property if its not all
    if (propertyType && propertyType !== "All") {
      query.type = new RegExp(propertyType, "i");
    }
    const properties = await Property.find(query);
    return new Response(JSON.stringify(properties), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something goes wrong", { status: 500 });
  }
};
