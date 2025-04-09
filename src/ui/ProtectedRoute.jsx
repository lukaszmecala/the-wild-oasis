import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var() (--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;
function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isLoadingUser, isAuthentitated } = useUser();

  useEffect(() => {
    if (!isAuthentitated && !isLoadingUser) {
      navigate("/login");
    }
  }, [isAuthentitated, isLoadingUser, navigate]);

  if (isLoadingUser)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  if (isAuthentitated) return children;
}

export default ProtectedRoute;
