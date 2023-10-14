export function load({ route, params }) {
  return {
    url: route.id,
    channelId: params.slug,
  }
}