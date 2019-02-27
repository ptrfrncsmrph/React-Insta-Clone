# Instagram clone experiment

This project uses Create React App with TypeScript.
The goal is to experiment with integrating ReasonReact into an existing codebase.
Currently I'm using the `Option` type from the `fp-ts` library, which seems to be an ideal candidate for refactoring in terms of Reason, which has an equivalent `Option` type out of the box.

Maybe I should start to integrate at the leaf node level, before attempting to refactor the top-level components that use `Option`.

The `Comment` component seems like a good place to start.

### Milestones

- [x] Convert `Comment` to a ReasonReact component
- [x] Give `Comment.re` equivalent content as `Comment.tsx`
- [x] Import SCSS stylesheet into `Comment.re`
  - _Note:_ Need to use `require` syntax
- [x] Use `emotion` inside of `Comment.re`, remove SCSS import
- [x] Generate TypeScript types for `Comment.re` to interface with `CommentSection.tsx` using `genType`
