export const BannerTitle = ({
  title,
  name,
  orignalName,
}: {
  title?: string
  name?: string
  orignalName?: string
}) => {
  return <h1 className="banner-title">{title || name || orignalName}</h1>
}
