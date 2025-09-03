import type { CollectionEntry } from "astro:content";

/**
 * 根据博客文章的 ID 和文件路径生成 URL
 * @param entry - 博客文章的集合条目
 * @returns 博客文章的 URL 路径
 */
export function getPostPath(entry: CollectionEntry<"blog">): string {
  const slug = entry.data.slug;
  
  // 对于使用 glob loader 的情况，文件路径信息在 entry.filePath
  // filePath 格式: "src/data/blog/2015/2015-07-23-lorem-ipsum.md"
  if (entry.filePath) {
    // 从 filePath 中提取相对于 blog 目录的路径
    const blogPathMatch = entry.filePath.match(/src\/data\/blog\/(.+)\.md$/);
    
    if (blogPathMatch) {
      const relativePath = blogPathMatch[1];
      const pathParts = relativePath.split('/');
      
      // 如果有目录结构
      if (pathParts.length > 1) {
        // 获取除了文件名之外的所有目录
        const directories = pathParts.slice(0, -1)
          .filter(part => part && !part.startsWith('_'));
        
        if (directories.length > 0) {
          return `/blog/${directories.join('/')}/${slug}/`;
        }
      }
    }
  }
  
  // 没有目录结构，直接返回 slug
  return `/blog/${slug}/`;
}

/**
 * 从完整路径中提取 slug 参数
 * 用于动态路由的 params
 */
export function getSlugFromPath(path: string): string {
  // 移除开头的 /blog/ 和结尾的 /
  return path.replace(/^\/blog\//, '').replace(/\/$/, '');
}