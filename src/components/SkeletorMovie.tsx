import ContentLoader, { IContentLoaderProps } from "react-content-loader"

export const SkeletorMovie = (props : IContentLoaderProps) => {
    return (
    <ContentLoader 
        speed={2}
        width={400}
        height={500}
        viewBox="0 0 400 500"
        backgroundColor="#bababa"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="107" y="157" rx="4" ry="4" width="180" height="270" /> 
        <rect x="110" y="435" rx="0" ry="0" width="110" height="11" />
      </ContentLoader>
    )
}
