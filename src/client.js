import sanityClient from "@sanity/client";

export default sanityClient({
	projectId: "h977pj7x", // find this at manage.sanity.io or in your sanity.json
	dataset: "production",
	apiVersion: "2023-01-01",
	useCdn: true,
});
