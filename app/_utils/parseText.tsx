import { Text } from '@mantine/core'

const reflectBrAndBold = (text: string) => {
  const ret = []

  let i = 0
  let tmpText = ''
  while (i < text.length) {
    if (text[i] === '\n') {
      if (tmpText.length > 0)
        ret.push(
          <Text component='span' key={i - 1}>
            {tmpText}
          </Text>,
        )
      ret.push(<br key={i} />)
      tmpText = ''
      i += 1
    } else if (text[i] === '*' && text[i + 1] === '*') {
      if (tmpText.length > 0)
        ret.push(
          <Text component='span' key={i - 1}>
            {tmpText}
          </Text>,
        )
      tmpText = ''
      i += 2
      while (text[i] !== '*' || text[i + 1] !== '*') {
        tmpText += text[i]
        i += 1
      }
      if (tmpText.length > 0)
        ret.push(
          <Text component='span' fw={700} key={i - 1}>
            {tmpText}
          </Text>,
        )
      tmpText = ''
      i += 2
    } else {
      tmpText += text[i]
      i += 1
    }
  }
  if (tmpText.length > 0)
    ret.push(
      <Text component='span' key={i}>
        {tmpText}
      </Text>,
    )

  return ret
}

export const parseText = (text: string) => {
  /**
   * textの中に、[text](link)という形式の文字列を見つけて、aタグとして返す
   * 改行はbrタグに変換する
   * **bold**は太文字に変換する
   * ↑実装の簡単のため、上記が入れ子になっているものは未対応
   */

  const regax = /\[(.*?)\]\((.*?)\)/g
  const matches = text.matchAll(regax)

  const ret = []
  let index = 0
  Array.from(matches).forEach((match) => {
    if (match.index === undefined) return
    ret.push(
      <Text key={index} component='span'>
        {reflectBrAndBold(text.slice(index, match.index))}
      </Text>,
    )
    index = match.index + match[0].length
    ret.push(
      <Text
        key={match.index}
        component='a'
        td='underline'
        c='blue'
        href={match[2]}
        target='_blank'
        rel='noopener noreferrer'
      >
        {match[1]}
      </Text>,
    )
  })
  if (text.slice(index).length > 0)
    ret.push(
      <Text key={index} component='span'>
        {reflectBrAndBold(text.slice(index))}
      </Text>,
    )
  return ret
}
