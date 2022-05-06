import styled from "styled-components";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import NavItem from "./NavItem";

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 0;
    min-width: 250px;
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
`;

const Logo = styled(Twitter)`
    color: #00aaee;
    width: 45px;
    height: 45px;
`;

const Button = styled.button`
    margin-top: 10px;
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    width: 200px;
    height: 50px;
    background-color: #00aaee;
    border-radius: 50px;
    border: none;
    transition: all 0.2s;
    &:hover {
        cursor: pointer;
        background-color: #009edc;
    }
`;

export default function Sidebar() {
    return (
        <Container>
            <Box>
                <Logo />
                <NavItem />
                <Button>Tweet</Button>
            </Box>
        </Container>
    );
}
