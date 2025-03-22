function renderRichText(node: any): string {
    if (!node) return '';
  
    switch (node.type) {
      case 'root':
        return node.children.map((child: any) => renderRichText(child)).join('');
      case 'paragraph':
        return `<p>${node.children.map((child: any) => renderRichText(child)).join('')}</p>`;
      case 'text':
        return node.value || '';
      case 'link':
        return `<a href="${node.url}" target="${node.target || '_self'}" title="${node.title || ''}" style="text-decoration: underline;">${
          node.children.map((child: any) => renderRichText(child)).join('')
        }</a>`;
      default:
        return '';
    }
  }
export default renderRichText  