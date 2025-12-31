import { requireAdmin } from "@/lib/auth-guard";

const AdminPage = async () => {
    await requireAdmin();
    return ( <>Admin page</> );
}
 
export default AdminPage;

