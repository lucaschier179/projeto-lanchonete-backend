import db from '../../../infrastructure/database/conexao_banco_de_dados';
import { TicketRegisterDTO } from "../dtos/ticketRegister.dto";


export async function registerTicketItensRepository(registerTicket: TicketRegisterDTO, id_pedido:number) {
    await db.connect()
    await db.query(`
        INSERT INTO lanchonete.item_pedido (id_pedido, id_produto, quantidade)
        SELECT
            $1 AS id_pedido,
            id_produto,
            quantidade
        FROM
            lanchonete.carrinho
        WHERE
            id_usuario = $2`, 
        [id_pedido, registerTicket.user_id]
    );

    await db.query(`
        UPDATE lanchonete.pedido pedido
        SET valor_total = COALESCE((
            SELECT CAST(SUM(produto.preco) AS DECIMAL(10, 2))
            FROM lanchonete.item_pedido item_pedido
            INNER JOIN lanchonete.produto produto ON produto.id_produto = item_pedido.id_produto
            WHERE item_pedido.id_pedido = pedido.id_pedido
        ), 0)
        WHERE pedido.id_pedido = $1`,
        [id_pedido])

    await db.query(`
    DELETE FROM lanchonete.carrinho
        WHERE id_usuario = $1;`,
    [registerTicket.user_id])
}