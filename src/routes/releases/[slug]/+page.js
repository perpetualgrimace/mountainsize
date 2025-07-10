export async function load({ params, fetch }) {
	const post = await import(`../${params.slug}.md`);
	const content = post.default;
	const { metadata } = post;

	const releases = await fetch(`/api/releases`);

	return {
		content,
		d: metadata,
		releases: releases.json()
	};
}
