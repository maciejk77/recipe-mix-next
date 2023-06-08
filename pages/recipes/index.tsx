import Layout from '@/components/layout';

export default function Recipes() {
  return (
    <Layout
      main={
        <div className="text-3xl p-3 text-black" data-testid="recipes">
          Recipes
        </div>
      }
    />
  );
}
