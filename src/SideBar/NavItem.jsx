import styled from "styled-components";
import { NumberSymbol } from "@styled-icons/fluentui-system-regular/NumberSymbol";
import { Home } from "@styled-icons/boxicons-solid/Home";
import { Notifications } from "@styled-icons/material-outlined/Notifications";
import { Email } from "@styled-icons/material-outlined/Email";
import { Bookmark } from "@styled-icons/fluentui-system-regular/Bookmark";
import { TextBulletListSquare } from "@styled-icons/fluentui-system-regular/TextBulletListSquare";
import { Person } from "@styled-icons/bootstrap/Person";
import { MoreCircle } from "@styled-icons/fluentui-system-regular/MoreCircle";

const Container = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: left;
    padding: 0;
`;

const Item = styled.li`
    width: 200px;
    /* background-color: saddlebrown; */
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: left;
    font-size: 1.2rem;
    &:hover {
        background-color: #f1f1f1;
        border-radius: 50px;
        cursor: pointer;
    }
`;

const HomeIcon = styled(Home)`
    width: 30px;
    height: 30px;
    margin: 15px 20px 15px 0;
    padding-left: 10px;
`;

const NumberSymbolIcon = styled(NumberSymbol)`
    width: 30px;
    height: 30px;
    margin: 15px 20px 15px 0;
    padding-left: 10px;
`;

const NotificationIcon = styled(Notifications)`
    width: 30px;
    height: 30px;
    margin: 15px 20px 15px 0;
    padding-left: 10px;
`;

const EmailIcon = styled(Email)`
    width: 30px;
    height: 30px;
    margin: 15px 20px 15px 0;
    padding-left: 10px;
`;

const BookmarkStarIcon = styled(Bookmark)`
    width: 30px;
    height: 30px;
    margin: 15px 20px 15px 0;
    padding-left: 10px;
`;

const TextBulletListSquareIcon = styled(TextBulletListSquare)`
    width: 30px;
    height: 30px;
    margin: 15px 20px 15px 0;
    padding-left: 10px;
`;

const AccountCircleIcon = styled(Person)`
    width: 30px;
    height: 30px;
    margin: 15px 20px 15px 0;
    padding-left: 10px;
`;

const MoreCircleIcon = styled(MoreCircle)`
    width: 30px;
    height: 30px;
    margin: 15px 20px 15px 0;
    padding-left: 10px;
`;

function NavItem() {
    const ItemText = [
        { icon: HomeIcon, text: "Home" },
        { icon: NumberSymbolIcon, text: "Explore" },
        { icon: NotificationIcon, text: "Notifications" },
        { icon: EmailIcon, text: "Messages" },
        { icon: BookmarkStarIcon, text: "Bookmarks" },
        { icon: TextBulletListSquareIcon, text: "Lists" },
        { icon: AccountCircleIcon, text: "Profile" },
        { icon: MoreCircleIcon, text: "More" },
    ];

    return (
        <Container>
            {ItemText.map((item, index) => (
                <Item key={index}>
                    <item.icon />
                    {item.text}
                </Item>
            ))}
        </Container>
    );
}

export default NavItem;
