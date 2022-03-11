import { Container } from "./styles";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable/TransactionsTable";

export function Dashboard(){
    return(
        <Container>
            <Summary></Summary>
            <TransactionsTable />
        </Container>
    )
}