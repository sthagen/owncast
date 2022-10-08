import { FC } from 'react';

export const ServerRenderedMetadata: FC = () => (
  <>
    <meta name="description" content="{{.Summary}}" />

    <meta property="og:title" content="{{.Name}}" />
    <meta property="og:site_name" content="{{.Name}}" />
    <meta property="og:url" content="{{.RequestedURL}}" />
    <meta property="og:description" content="{{.Summary}}" />
    <meta property="og:type" content="video.other" />
    <meta property="video:tag" content="{{.TagsString}}" />

    <meta property="og:image" content="{{.Thumbnail}}" />
    <meta property="og:image:url" content="{{.Thumbnail}}" />
    <meta property="og:image:alt" content="{{.Image}}" />

    <meta property="og:video" content="{{.RequestedURL}}embed/video" />
    <meta property="og:video:secure_url" content="{{.RequestedURL}}embed/video" />
    <meta property="og:video:height" content="315" />
    <meta property="og:video:width" content="560" />
    <meta property="og:video:type" content="text/html" />
    <meta property="og:video:actor" content="{{.Name}}" />

    <meta property="twitter:title" content="{{.Name}}" />
    <meta property="twitter:url" content="{{.RequestedURL}}" />
    <meta property="twitter:description" content="{{.Summary}}" />
    <meta property="twitter:image" content="{{.Image}}" />
    <meta property="twitter:card" content="player" />
    <meta property="twitter:player" content="{{.RequestedURL}}embed/video" />
    <meta property="twitter:player:width" content="560" />
    <meta property="twitter:player:height" content="315" />
  </>
);
