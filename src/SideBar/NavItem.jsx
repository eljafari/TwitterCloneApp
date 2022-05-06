import styled from "styled-components";
import { NumberSymbol } from "@styled-icons/fluentui-system-regular/NumberSymbol";
import { Home } from "@styled-icons/boxicons-regular/Home";
import { Notifications } from "@styled-icons/material-rounded/Notifications";
import { Email } from "@styled-icons/material/Email";
import { BookmarkStar } from "@styled-icons/boxicons-solid/BookmarkStar";
import { TextBulletListSquare } from "@styled-icons/fluentui-system-filled/TextBulletListSquare";
import { AccountCircle } from "@styled-icons/material/AccountCircle";
import { MoreCircle } from "@styled-icons/fluentui-system-regular/MoreCircle";

const Container = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: left;
    padding: 0;
`;

const Item = styled.li`
    width: 200px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: left;
    font-size: 1.2rem;
`;

const HomeIcon = styled(Home)`
    width: 30px;
    height: 30px;
    margin-right: 10px;
    margin: 10px 0;
`;

const NumberSymbolIcon = styled(NumberSymbol)`
    width: 30px;
    height: 30px;
    margin-right: 10px;
    margin: 10px 0;
`;

const NotificationIcon = styled(Notifications)`
    width: 30px;
    height: 30px;
    margin-right: 10px;
    margin: 10px 0;
`;

const EmailIcon = styled(Email)`
    width: 30px;
    height: 30px;
    margin-right: 10px;
    margin: 10px 0;
`;

const BookmarkStarIcon = styled(BookmarkStar)`
    width: 30px;
    height: 30px;
    margin-right: 10px;
    margin: 10px 0;
`;

const TextBulletListSquareIcon = styled(TextBulletListSquare)`
    width: 30px;
    height: 30px;
    margin-right: 10px;
    margin: 10px 0;
`;

const AccountCircleIcon = styled(AccountCircle)`
    width: 30px;
    height: 30px;
    margin-right: 10px;
    margin: 10px 0;
`;

const MoreCircleIcon = styled(MoreCircle)`
    width: 30px;
    height: 30px;
    margin-right: 10px;
    margin: 10px 0;
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
                <Item>
                    <item.icon />
                    {item.text}
                </Item>
            ))}
        </Container>
    );
}

export default NavItem;
