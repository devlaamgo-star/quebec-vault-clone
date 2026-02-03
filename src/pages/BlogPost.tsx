import { useParams, Link, Navigate } from "react-router-dom";
import { getPostBySlug, getAllPosts } from "@/data/blogPosts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Simple markdown-like rendering for the content
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: JSX.Element[] = [];
    let listItems: string[] = [];
    let listType: "ul" | "ol" | null = null;

    const flushList = () => {
      if (listItems.length > 0 && listType) {
        const ListTag = listType;
        elements.push(
          <ListTag key={elements.length} className={listType === "ul" ? "list-disc pl-6 my-4 space-y-2" : "list-decimal pl-6 my-4 space-y-2"}>
            {listItems.map((item, i) => (
              <li key={i} className="text-muted-foreground">{item}</li>
            ))}
          </ListTag>
        );
        listItems = [];
        listType = null;
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      if (trimmedLine.startsWith("## ")) {
        flushList();
        elements.push(
          <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
            {trimmedLine.replace("## ", "")}
          </h2>
        );
      } else if (trimmedLine.startsWith("### ")) {
        flushList();
        elements.push(
          <h3 key={index} className="text-xl font-semibold mt-6 mb-3">
            {trimmedLine.replace("### ", "")}
          </h3>
        );
      } else if (trimmedLine.startsWith("#### ")) {
        flushList();
        elements.push(
          <h4 key={index} className="text-lg font-semibold mt-4 mb-2">
            {trimmedLine.replace("#### ", "")}
          </h4>
        );
      } else if (trimmedLine.startsWith("- **") || trimmedLine.startsWith("- ")) {
        if (listType !== "ul") {
          flushList();
          listType = "ul";
        }
        const itemText = trimmedLine.replace(/^- /, "").replace(/\*\*/g, "");
        listItems.push(itemText);
      } else if (/^\d+\. /.test(trimmedLine)) {
        if (listType !== "ol") {
          flushList();
          listType = "ol";
        }
        const itemText = trimmedLine.replace(/^\d+\. /, "").replace(/\*\*/g, "");
        listItems.push(itemText);
      } else if (trimmedLine === "") {
        flushList();
      } else {
        flushList();
        elements.push(
          <p key={index} className="text-muted-foreground my-4 leading-relaxed">
            {trimmedLine.replace(/\*\*/g, "")}
          </p>
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <article className="max-w-3xl mx-auto">
          <Link to="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour au blog
            </Button>
          </Link>

          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary">{post.category}</Badge>
              <span className="text-sm text-muted-foreground">
                {new Date(post.publishedAt).toLocaleDateString("fr-CA", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-xl text-muted-foreground mb-4">{post.excerpt}</p>
            <p className="text-sm text-muted-foreground">Par {post.author}</p>
          </header>

          <div className="prose prose-lg max-w-none">
            {renderContent(post.content)}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
