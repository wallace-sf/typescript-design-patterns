// The class to be refactored

// class BlogPost {
//   title: string;
//   content: string;

//   constructor(title: string, content: string) {
//     this.title = title;
//     this.content = content;
//   }

//   // Methods related to content management
//   createPost() {
//     // Implementation here
//   }

//   updatePost() {
//     // Implementation here
//   }

//   deletePost() {
//     // Implementation here
//   }

//   // Method related to post display
//   displayHTML() {
//     return `<h1>${this.title}</h1><p>${this.content}</p>`;
//   }
// }

// Refactor the class to single responsibility principle

class BlogPost {
  title: string;
  content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }

  // Methods related to content management
  createPost() {
    // Implementation here
  }

  updatePost() {
    // Implementation here
  }

  deletePost() {
    // Implementation here
  }
}

class BlogPostDisplay {
  public blogPost: BlogPost;

  construct(blogPost: BlogPost) {
    this.blogPost = blogPost;
  }

  // Method related to post display
  displayHTML() {
    return `<h1>${this.blogPost.title}</h1><p>${this.blogPost.content}</p>`;
  }
}

class BlogPostJSON {
  public blogPost: BlogPost;

  construct(blogPost: BlogPost) {
    this.blogPost = blogPost;
  }

  // Method related to post display
  displayJSON() {
    return JSON.stringify(this.blogPost);
  }
}
