import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { GET_SINGLE_ITEM } from "../../queries/queries";
import { Button} from "@mui/material";
import ShoeCard from "../../components/ShoeCard";
import { ArrowBack } from "@mui/icons-material";
import SimilarProducts from "../../components/SimilarProducts";
const SingleItem = () => {
  const { id } = useParams();
  const { data} = useQuery(GET_SINGLE_ITEM, {
    variables: { id: id },
  });

  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        variant="contained"
        onClick={() => navigate(-1)}
        sx={{ position: "absoulte", ml: "-95%", mt: "20px", mb: "100px" }}
        color="error"
      >
        <ArrowBack />
      </Button>
      <ShoeCard
        size={data.shoes[0].size}
        image={data.shoes[0]?.image}
        model={data.shoes[0]?.name}
        make={data.shoes[0].company}
        price={data.shoes[0].price}
        id={data.shoes[0].id}
      />
      <div style={{ marginTop: "80px" }}></div>
      <SimilarProducts />
    </div>
  );
};

export default SingleItem;
