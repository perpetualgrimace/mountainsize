import { json } from '@sveltejs/kit';

const fetchMarkdownReleases = async () => {
	const allReleaseFiles = import.meta.glob('/src/routes/releases/*.md');
	const iterableReleaseFiles = Object.entries(allReleaseFiles);

	const allReleases = await Promise.all(
		iterableReleaseFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const ReleasePath = path.slice(11, -3);

			return {
				meta: metadata,
				path: ReleasePath
			};
		})
	);

	return allReleases;
};

export const GET = async () => {
	const allReleases = await fetchMarkdownReleases();

	const sortedReleases = allReleases.sort((a, b) => {
		return b.meta.id - a.meta.id;
	});

	return json(sortedReleases);
};
