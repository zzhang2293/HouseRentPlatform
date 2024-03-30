'use client'
import {useParams, useRouter, useSearchParams, usePathname} from "next/navigation";

const PropertyPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const {id} = useParams();
    const name = searchParams.get('name');
    const pathname = usePathname()
    return <div>PropertyPage</div>;
};

export default PropertyPage;