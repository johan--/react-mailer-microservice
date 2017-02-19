import * as Hapi from 'hapi'
import * as templateRenderService from '../services/template-render-service'

export default function (server: Hapi.Server) {
    server.route({
        method: 'post',
        path: '/render-template',
        config: {auth: 'jwt'},
        handler(request: Hapi.Request, reply: Hapi.IReply) {
            const {payload} = request
            const emailHTML = templateRenderService.renderTemplate(payload.templateName, payload.data)
            reply(emailHTML)
        }
    })

}

