export function renderTemplate(templateName: string, data: Object) {
    const template = require(`../templates/${templateName}`)
    return template.renderTemplate(data)
}