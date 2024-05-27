import Inicio from "../../components/Principal/Inicio";
import Layout from "../../layout/layout";
import Fondito from "../../fondo/fondo"; 

const PrincipalContainer = () => {
  return (
    <div>
    <Fondito/>
    <Layout>
      <Inicio />
    </Layout>
    </div>
  );
};

export default PrincipalContainer;
