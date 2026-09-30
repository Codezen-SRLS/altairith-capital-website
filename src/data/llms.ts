import { about, chairman, group, hero, mission, site, values } from "./site";

/** Short llms.txt index (https://llmstxt.org). */
export function llmsIndex() {
    return `# ${site.title}

> ${site.description}

${site.title} (${site.legalName}) is a private, long-horizon holding company whose group companies are active in areas including ${about.sectors.join(", ")}. Founded in ${site.foundingDate} and chaired by ${chairman.name}. Tagline: "${site.tagline}"

## Pages

- [Home](${site.url}/): About, Chairman, Mission, Group, Values, Contact
- [Privacy & cookie policy](${site.url}/privacy/)
- [Full plain-text profile](${site.url}/llms-full.txt): complete site content in Markdown

## Contact

- Email: ${site.email}
- Address: ${site.address.full}
- LinkedIn: ${site.linkedin}
`;
}

/** Full site content as Markdown for agents. */
export function llmsFull() {
    const list = (xs: string[]) => xs.map((x) => `- ${x}`).join("\n");
    return `# ${site.title}

> ${site.description}

- Legal name: ${site.legalName}
- Website: ${site.url}
- Founded: ${site.foundingDate}, privately held
- Sectors include: ${about.sectors.join(", ")}
- Founder & Chairman: ${chairman.name} (${chairman.url})
- Email: ${site.email}
- Address: ${site.address.full}
- LinkedIn: ${site.linkedin}

## Overview

${hero.lines.join(" ")}

${hero.intro}

## About

${about.lead}

${about.body}

### Sectors (including)

${list(about.sectors)}

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
