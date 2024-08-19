import React from "react";

interface RichTextASTNode {
  type: string
  children: RichTextASTNode[]
  level?: number
  value?: string
  bold?: boolean
  italic?: boolean
  url?: string
  title?: string
  target?: string
  listType?: string
}

interface RichTextProps {
  className?: string
  data: RichTextASTNode
}

export function RichText({ className, data }: RichTextProps) {
  return (
    <div className={className}>
      {serializeRichTextASTNode(data)}
    </div>
  )
}

function serializeRichTextASTNode(
  node: RichTextASTNode,
  index: number = 0,
): React.ReactNode {
  switch (node.type) {
    case 'root':
      return (
        <div key={index}>{node.children.map(serializeRichTextASTNode)}</div>
      )
    case 'heading':
      return React.createElement(
        `h${node.level}`,
        null,
        node.children.map(serializeRichTextASTNode),
      )
    case 'paragraph':
      return <p key={index}>{node.children.map(serializeRichTextASTNode)}</p>
    case 'text':
      return (
        <span
          key={index}
          style={{
            fontWeight: node.bold ? 'bold' : undefined,
            fontStyle: node.italic ? 'italic' : undefined,
          }}>
          {node.value}
        </span>
      )
    case 'link':
      return (
        <a key={index} href={node.url} title={node.title} target={node.target}>
          {node.children.map(serializeRichTextASTNode)}
        </a>
      )
    case 'list':
      const List = node.listType === 'unordered' ? 'ul' : 'ol'
      return (
        <List key={index}>
          {node.children.map((item) => (
            <li key={item.children[0].value}>
              {item.children.map(serializeRichTextASTNode)}
            </li>
          ))}
        </List>
      )
    default:
      return null
  }
}