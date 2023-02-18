import Login from "./Login";
import styled from '@emotion/styled'

const OverrideCSSWrapper: any = styled.div`
  input, label {
    color: white!important;
  }
`
const AuthWrapper = () => {

    return (
        <div className="flex justify-center items-center min-h-screen h-full">
            <div className="w-[300px] p-10">
                <OverrideCSSWrapper>
                    <div className="text-center text-white text-2xl">Login</div>
                    <Login />
                </OverrideCSSWrapper>
            </div>
        </div>
    );
};

export default AuthWrapper;