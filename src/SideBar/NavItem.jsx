import styled from "styled-components";
import { NumberSymbol } from "@styled-icons/fluentui-system-regular/NumberSymbol";

const Container = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: left;
    padding: 0;
`;

const Item = styled.li`
    width: 150px;
    background-color: saddlebrown;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: left;
    font-size: 1.2rem;
`;

const Symbol = styled(NumberSymbol)`
    width: 30px;
    height: 30px;
    margin-right: 10px;
`;

function NavItem() {
    const ItemText = [
        "Home",
        "Explore",
        "Notifications",
        "Messages",
        "Bookmarks",
        "Lists",
        "Profile",
        "More",
    ];

    return (
        <Container>
            {ItemText.map((item, index) => (
                <Item>
                    <Symbol />
                    {item}
                </Item>
            ))}
        </Container>
    );
}

export default NavItem;
