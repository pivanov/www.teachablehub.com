import { useGoogleOptimize } from '@utils/hooks';
import { RichText } from 'prismic-reactjs';

const HomeBanner = ({ data }) => {
  const variant = useGoogleOptimize('sbvk5yu9RduLGncBUMw_qQ');

  const banner = data.homepage_banner[variant];

  return (
    <section
      style={{
        minHeight: 300,
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),url(${(banner.image || {}).url})`
      }}
    >
      <div className="banner-content container">
        <h2 className="banner-title">
          {RichText.asText(banner.title)}
        </h2>
        <p className="banner-description">{RichText.asText(banner.tagline)}</p>
      </div>
    </section>
  )
}

export default HomeBanner
