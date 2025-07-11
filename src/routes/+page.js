export const load = async ({ fetch }) => {
	const response = await fetch(`/api/releases`);
	const releases = await response.json();

	return {
		releases
	};
};
