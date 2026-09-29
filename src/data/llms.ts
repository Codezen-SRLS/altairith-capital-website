import { about, chairman, group, hero, mission, site, values } from "./site";

/** Short llms.txt index (https://llmstxt.org). */
export function llmsIndex() {
    return `# ${site.title}

> ${site.description}

${site.title} (${site.legalName}) is a private, long-horizon holding company based in Italy, founded and chaired by ${chairman.name}. Tagline: "${site.tagline}"

## Pages

- [Home](${site.url}/): About, Chairman, Mission, Group, Values, Contact
- [Privacy & cookie policy](${site.url}/privacy/)
- [Full plain-text profile](${site.url}/llms-full.txt): complete site content in Markdown

## Contact

- Email: ${site.email}
- Address: ${site.address.full}
`;
}

/** Full site content as Markdown for agents. */
export function llmsFull() {
    const list = (xs: string[]) => xs.map((x) => `- ${x}`).join("\n");
    return `# ${site.title}

> ${site.description}

- Legal name: ${site.legalName}
- Website: ${site.url}
- Founder & Chairman: ${chairman.name}
- Email: ${site.email}
- Address: ${site.address.full}
- LinkedIn: ${site.linkedin}

## Overview

${hero.lines.join(" ")}

${hero.intro}

## About

${about.lead}

${about.body}

### Areas of activity

${list(about.areas)}

## Message from the Chairman (${chairman.name})

${chairman.lead}

${chairman.body.join("\n\n")}

## Mission

${mission.before}${mission.highlight}${mission.after}

### Principles

${list(mission.pillars)}

## The Group: ${group.title}

${group.intro}

${group.companies
    .map((c) => `- **${c.name}**${c.url ? ` (${c.url})` : ""}: ${c.desc}`)
    .join("\n")}

## Values

${values.map((v) => `- **${v.title}**: ${v.body}`).join("\n")}
`;
}
