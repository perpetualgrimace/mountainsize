export default function slugify(str) {
	return str
		.replace(/^\s+|\s+$/g, '') // trim
		.toLowerCase()
		.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
		.replace(/\s+/g, '-') // collapse whitespace and replace with -
		.replace(/-+/g, '-'); // collapse dashes
}
