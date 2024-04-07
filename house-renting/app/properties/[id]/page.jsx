"use client";
import { useParams } from "next/navigation";
import { fetchProperty } from "@/utils/requests";
import { useEffect, useState } from "react";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import Link from "next/link";
import PropertyDetail from "@/components/PropertyDetail";
import PropertyImages from "@/components/PropertyImages";
import { FaArrowLeft } from "react-icons/fa";
import Spinner from "@/components/Spinner";
import BookmarkButton from "@/components/BookmarkButton";
import ShareButtons from "@/components/ShareButtons";
import PropertyContactForm from "@/components/PropertyContactForm";

const PropertyPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) return;
      try {
        const property = await fetchProperty(id);
        setProperty(property);
      } catch (error) {
        console.log("error fetching property");
      } finally {
        setLoading(false);
      }
    };
    if (property === null) {
      fetchPropertyData().then();
    }
  }, [id, property]);
  if (!property && !loading) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Property not found!
      </h1>
    );
  }
  return (
    <>
      {loading && <Spinner loading={loading}></Spinner>}
      {!loading && property && (
        <>
          <PropertyHeaderImage image={property.images[0]}></PropertyHeaderImage>
          <section>
            <div className="container m-auto py-6 px-6">
              <Link
                href="/properties"
                className="text-blue-500 hover:text-blue-600 flex items-center"
              >
                <FaArrowLeft className="mr-2"></FaArrowLeft> Back to Properties
              </Link>
            </div>
          </section>
          <section className="bg-blue-50">
            <div className="container m-auto py-10 px-6">
              <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                <PropertyDetail property={property}></PropertyDetail>
                <aside className="space-y-4">
                  <BookmarkButton property={property} />
                  <ShareButtons property={property} />
                  <PropertyContactForm property={property} />
                </aside>
              </div>
            </div>
          </section>
          <PropertyImages images={property.images}></PropertyImages>
        </>
      )}
    </>
  );
};

export default PropertyPage;
