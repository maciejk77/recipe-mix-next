import Layout from '@/components/layout';

export default function EditRecipe() {
  return (
    <Layout
      main={
        <div className="text-3xl p-3 text-black" data-testid="edit-recipe">
          Edit Recipe
        </div>
      }
    />
  );
}
