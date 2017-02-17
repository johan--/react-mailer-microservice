export function renderTemplate(templateName: string, payload: Object) {
    const template = require(`../templates/${templateName}`)
    return template.renderTemplate(payload)
}