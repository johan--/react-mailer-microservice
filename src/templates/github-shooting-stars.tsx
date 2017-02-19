import * as React from 'react'
import ReactHTMLEmail, {renderEmail} from 'react-html-email'
ReactHTMLEmail.injectReactEmailAttributes()
import {Box, Email, Image, Item, Span, A} from 'react-html-email'

const css = `
a {
    color: black;
}

@media only screen and (max-device-width: 480px) {
  font-size: 20px !important;
}`.trim()

type Repo = {
    name: string,
    description: string,
    url: string,
}

type Props = {
    title: string,
    repos: Repo[]
}

const GithubShootingStars = ({title, repos}: Props) => (
    <Email title={title} headCSS={css}>
        <Item style={{display: 'block', margin: '16px 0', textAlign: 'center'}}>
            <Span
                style={{marginBottom: 8, display: 'block'}}
                fontSize={24}>Github Shooting Stars</Span>
            <Span fontSize={12}>some hidden gems you may have forget...</Span>
        </Item>
        <Item>
            <Image
                style={{borderRadius: 10, margin: 10}}
                alt="shooting stars"
                src="http://i.imgur.com/Y9mLkAO.jpg"
                width={600}/>
        </Item>
        <Item>
            {
                repos.map((repo, index) => (
                    <Box key={repo.url} cellSpacing={20} width="100%" style={{ borderTop: index > 0 ? '1px solid black': '' }}>
                        <Item>
                            <Span
                                style={{marginBottom: 12, display: 'block'}}
                                color="gray"><A href={repo.url}>{repo.name}</A></Span>
                            <Span color="gray" lineHeight={20}>{repo.description}</Span>
                        </Item>
                    </Box>
                ))
            }
        </Item>
    </Email>
)

export function renderTemplate(data): string {
    return renderEmail(<GithubShootingStars
        title="Github Shooting Stars"
        repos={data.repos}
    />)
}