import ButtonBack from "../../components/atom/ButtonBack";
import StepsLayout from "../../layouts/StepsLayout";
import SummaryCard from "./SummaryCard";
import { Link, Navigate } from "react-router-dom";
import "./styles.scss";
import { PATHS } from "../../utils/constants";
import { useAppSelector } from "../../app/hooks";

const Summary = () => {
  const user = useAppSelector((state) => state.home.user);
  const selectedPlan = useAppSelector((state) => state.plans.selectedPlan);

  if (!user) {
    return <Navigate to={PATHS.HOME} />;
  }
  if (!selectedPlan) {
    return <Navigate to={PATHS.PLANS} />;
  }

  return (
    <StepsLayout>
      <div className="container container-summary">
        <div className="container-button-back">
          <Link to={PATHS.PLANS}>
            <ButtonBack />
          </Link>
        </div>
        <h1 className="title-summary">Resumen del seguro</h1>
        <SummaryCard
          data={{
            username: `${user?.name} ${user?.lastName}`,
            dni: user.dni ?? "",
            cellphoneNumber: user?.phoneNumber ?? "",
            plan: selectedPlan?.name,
            price: selectedPlan?.price,
          }}
        />
      </div>
    </StepsLayout>
  );
};

export default Summary;
