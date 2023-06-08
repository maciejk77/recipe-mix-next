import Layout from '@/components/layout';

export default function AddRecipe() {
  return (
    <Layout
      main={
        <div className="text-3xl p-3 text-black" data-testid="add-recipe">
          Add Recipe
        </div>
      }
    />
  );
}
