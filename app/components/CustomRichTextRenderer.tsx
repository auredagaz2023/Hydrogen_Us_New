const CustomRichTextRenderer = ({ content }) => {
  const renderNode = (node, index) => {
    switch (node.nodeType) {
      case 'paragraph':
        return (
          <p key={index}>
            {node.content.map((textNode, i) => renderNode(textNode, i))}
          </p>
        );
      case 'text':
        let text = node.value;
        node.marks?.forEach(mark => {
          if (mark.type === 'bold') {
            text = <strong>{text}</strong>; 
          }
          if (mark.type === 'italic') {
            text = <em>{text}</em>;
          }
        });
        return <span key={index}>{text}</span>;
      // Add more cases for other node types as needed
      default:
        return null;
    }
  };
  
  return <div>{content?.content?.map(renderNode)}</div>;
}

export default CustomRichTextRenderer