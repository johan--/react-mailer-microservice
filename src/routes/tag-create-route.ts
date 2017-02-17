import * as Hapi from 'hapi'

export default function (server: Hapi.Server) {

    server.route({
        method: 'get',
        path: '/tags/create',
        handler(request: Hapi.Request, reply: Hapi.IReply) {
            reply('ciaone')
        }
    })

}

