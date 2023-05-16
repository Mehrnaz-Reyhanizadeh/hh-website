import Head from "next/head";

function Meta(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="keyword" content={props.keyword} />
      <meta charSet="utf-8" />
      <meta name="author" content="hossein hekmati" />
      <meta name="author" content="حسین حکمتی" />
      <meta name="language" content="english" />
      <meta name="language" content="persian" />
      <meta name="language" content="فارسی" />
      <meta name="expire" content="never" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

Meta.defaultProps = {
  title: "hossein hekmati",
  description: "ui ux designer",
  keyword:
    "UX/UI Design, Web Design, Drawing Artist, digital designer,hossein, hekmati, disgner, ui, ux, ui ux, حسین حکمتی, دیزاینز, طراح, گرافیست, حکمتی دیزاینر",
};
export default Meta;
