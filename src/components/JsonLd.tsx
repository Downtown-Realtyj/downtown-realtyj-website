import { jsonLdSchema } from "../utils/jsonLdSchema";

interface JsonLdProps {
  data: jsonLdSchema;
}

export default function JsonLd({ data }: JsonLdProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}