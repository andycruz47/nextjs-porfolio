import Layout from "../components/Layout";
import Error from "./_error";

const Github = ({ user, statusCode }) => {
  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }

  return (
    <Layout title="Mis datos de contacto" footer={false} dark>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <h1>{user.name}</h1>
            <img src={user.avatar_url} alt="" style={{ width: "100%" }} />
            <p>{user.bio}</p>

              <a > +51 949156354 </a>
              <a> andy.cruz.h@uni.pe</a> 
            <a
              href="https://www.linkedin.com/in/andy-cruz-761bb21ba/"
              target="_blank"
              className="btn btn-outline-secondary my-1"
            >
              Mi linkedin
            </a>
            <a
              href={user.html_url}
              target="_blank"
              className="btn btn-outline-secondary"
            >
              Mi Github
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Github.proptypes = {};

export async function getServerSideProps() {
  const res = await fetch(
    "https://api.github.com/users/andycruz47"
  );
  const data = await res.json();

  const statusCode = res.status > 200 ? res.status : false;

  return {
    props: {
      user: data,
      statusCode,
    },
  };
}

export default Github;
