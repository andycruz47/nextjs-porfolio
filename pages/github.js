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
            <h2 className="font-weight-bold">{user.name}</h2>
            <img src={user.avatar_url} alt="" style={{ width: "100%" }} />
            <p>{user.bio}</p>
              <a
               href="mailto:andy.cruz.h@uni.pe"
               target="_blank"
               className="btn btn-outline-secondary my-1"
               > 
               Mi Correo
              </a> 

              <a
              href="https://wa.me/51965447329"
              target="_blank"
              className="btn btn-outline-secondary my-1"
            >
              Mi Whatsapp (Business)
            </a>

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
              className="btn btn-outline-secondary my-1"
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
