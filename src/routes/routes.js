import { Router } from "express";
import {cadastro_obras, findAll, findById, pesquisar_obra, remove, update} from '../controllers/controllers.js'
import {cadastro_usuario, login, validarToken, deletarToken, pesquisarUsuarioPeloNome} from '../controllers/User.controllers.js'
import {validID, validObras} from '../middlewares/global.middlewares.js'

const route = Router()

route.post("/cadastro_obras", cadastro_obras)
route.get("/obras", findAll)
route.get("/:id", validID, validObras, findById)
route.patch("/:id", validID, validObras, update)
route.delete("/:id", validID, validObras, remove)
route.post("/pesquisar_obra", pesquisar_obra)
route.post("/cadastro_usuario", cadastro_usuario)

route.post("/login", login)
route.post("/pesquisar_usuario_nome", pesquisarUsuarioPeloNome)
route.post("/validarToken", validarToken)
route.post("/deletarToken", deletarToken)




export default route
