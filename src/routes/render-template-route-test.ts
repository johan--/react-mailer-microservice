import * as Hapi from 'hapi'
import * as templateRenderService from '../services/template-render-service'

const repos = [{
    "name": "shelljs/shelljs",
    "description": ":shell: Portable Unix shell commands for Node.js",
    "url": "https://github.com/shelljs/shelljs"
}, {
    "name": "palmerhq/backpack",
    "description": "🎒 Backpack is a minimalistic build system for Node.js projects.",
    "url": "https://github.com/palmerhq/backpack"
}, {
    "name": "toddmotto/angular-pizza-creator",
    "description": "Source code for Angular advanced Form APIs pizza builder",
    "url": "https://github.com/toddmotto/angular-pizza-creator"
}]

export default function (server: Hapi.Server) {

    server.route({
        method: 'get',
        path: '/render-template-test',
        handler(request: Hapi.Request, reply: Hapi.IReply) {
            const emailHTML = templateRenderService.renderTemplate('github-shooting-stars', {
                repos
            })
            reply(emailHTML)
        }
    })

}

