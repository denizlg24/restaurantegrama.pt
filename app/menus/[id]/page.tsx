export default function Menus({ params }: { params: { id: string } }) {
  return (
    <iframe
      src={`/${params.id}#toolbar=0&navpanes=0`}
      className="w-full h-screen"
    />
  );
}
