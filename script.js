// script.js

/* =========================
   1) DATA: STRICT MAPPING (EN/ES/ReportsTo)
   ========================= */

const ORG_DATA = {
    id: "root",
    type: "HOLDING",
    title: "Axis Global Network",
    subtitle: "HOLDING / S.A.S",
    desc: "Dirección estratégica y rentabilidad global del grupo. Una Holding es una sociedad tenedora de acciones que controla a otras compañías (en este caso, las agencias). Su función no es operar el día a día, sino definir la visión, el gobierno corporativo y la salud financiera del grupo.",
    children: [
        {
            id: "c_suite",
            type: "GROUP",
            title: "NIVEL CORPORATIVO (C-SUITE)",
            subtitle: "Dirección Estratégica",
            desc: "Dirección estratégica y rentabilidad global del grupo.",
            children: [
                {
                    id: "role_ceo", type: "ROLE",
                    title: "CEO - Chief Executive Officer",
                    subtitle: "Director General Global",
                    reportsTo: "Junta Directiva",
                    desc: "Máximo responsable de la visión, los resultados financieros y la expansión del grupo."
                },
                {
                    id: "role_coo", type: "ROLE",
                    title: "COO - Chief Operating Officer",
                    subtitle: "Director de Operaciones",
                    reportsTo: "CEO Global",
                    desc: "Diseña y supervisa la eficiencia de los procesos de trabajo entre todas las unidades de negocio."
                },
                {
                    id: "role_cmo", type: "ROLE",
                    title: "CMO - Chief Marketing Officer",
                    subtitle: "Director de Marketing de la Agencia",
                    reportsTo: "CEO Global",
                    desc: "Lidera la promoción de la agencia, la participación en festivales y la captación de nuevos clientes (New Business)."
                },
                {
                    id: "role_ea", type: "ROLE",
                    title: "Executive Assistant",
                    subtitle: "Asistente Ejecutivo",
                    reportsTo: "CEO Global",
                    desc: "Soporte administrativo de alto nivel para la gestión de la agenda y comunicaciones de la C-Suite."
                },
                // --- MOVED AGENCIES & SHARED SERVICES HERE AS CHILDREN OF C-SUITE ---
                {
                    id: "shared_services",
                    type: "GROUP_SHARED",
                    title: "SERVICIOS COMPARTIDOS",
                    subtitle: "SHARED SERVICES",
                    desc: "Departamentos transversales que optimizan costos sirviendo a todo el grupo.",
                    children: [
                        {
                            id: "dept_hr", type: "DEPT_SHARED",
                            title: "Talento Humano", subtitle: "People & Culture",
                            children: [
                                { id: "role_cpo", type: "ROLE", title: "CPO - Chief People Officer", subtitle: "Director de Talento", reportsTo: "CEO Global", desc: "Líder de la cultura y bienestar organizacional." },
                                { id: "role_ta_mgr", type: "ROLE", title: "Talent Acquisition Manager", subtitle: "Gerente de Reclutamiento", reportsTo: "CPO", desc: "Coordina la búsqueda y contratación del talento." },
                                { id: "role_payroll", type: "ROLE", title: "Payroll & Benefits Specialist", subtitle: "Especialista de Nómina", reportsTo: "CPO", desc: "Gestiona sueldos, seguridad social y beneficios." },
                                { id: "role_hrbp", type: "ROLE", title: "HRBP - Human Resources Business Partner", subtitle: "Gestor de RRHH", reportsTo: "CPO", desc: "Gestor de RRHH asignado para atender necesidades en cada agencia." }
                            ]
                        },
                        {
                            id: "dept_legal", type: "DEPT_SHARED",
                            title: "Departamento Legal", subtitle: "Legal",
                            children: [
                                { id: "role_gc", type: "ROLE", title: "General Counsel", subtitle: "Director Legal", reportsTo: "CEO Global", desc: "Abogado jefe que supervisa la legalidad de los negocios." },
                                { id: "role_lab_atty", type: "ROLE", title: "Labor & Payroll Attorney", subtitle: "Abogado Laboral", reportsTo: "General Counsel", desc: "Especialista en contratos de empleados y procesos de nómina." },
                                { id: "role_ip_atty", type: "ROLE", title: "Marketing & IP Attorney", subtitle: "Abogado de Publicidad e IP", reportsTo: "General Counsel", desc: "Especialista en propiedad intelectual, marcas y contratos de influencers." }
                            ]
                        },
                        {
                            id: "dept_finance", type: "DEPT_SHARED",
                            title: "Finanzas y Administración", subtitle: "Finance",
                            children: [
                                { id: "role_cfo", type: "ROLE", title: "CFO - Chief Financial Officer", subtitle: "Director Financiero", reportsTo: "CEO Global", desc: "Máxima autoridad en gestión de capital y auditoría." },
                                { id: "role_acct", type: "ROLE", title: "Accounting Lead", subtitle: "Jefe de Contabilidad", reportsTo: "CFO", desc: "Supervisa el registro de transacciones e impuestos." },
                                { id: "role_treasury", type: "ROLE", title: "Treasury Specialist", subtitle: "Especialista en Tesorería", reportsTo: "Jefe de Contabilidad", desc: "Gestiona el flujo de caja, bancos y pagos." },
                                { id: "role_billing", type: "ROLE", title: "Billing & Collections Coordinator", subtitle: "Coordinador de Facturación", reportsTo: "Jefe de Contabilidad", desc: "Asegura el cobro oportuno a los clientes." },
                                { id: "role_procure", type: "ROLE", title: "Procurement Analyst", subtitle: "Analista de Compras", reportsTo: "CFO", desc: "Negocia con proveedores de insumos y servicios." }
                            ]
                        },
                        {
                            id: "dept_it", type: "DEPT_SHARED",
                            title: "Tecnología", subtitle: "IT",
                            children: [
                                { id: "role_cto", type: "ROLE", title: "CTO - Chief Technology Officer", subtitle: "Director de Tecnología", reportsTo: "COO", desc: "Define las herramientas digitales y de IA de la agencia." },
                                { id: "role_infra", type: "ROLE", title: "Infrastructure & Security Manager", subtitle: "Gerente de Sistemas", reportsTo: "CTO", desc: "Protege la red y garantiza que los servidores funcionen." },
                                { id: "role_supp", type: "ROLE", title: "IT Support Technicians", subtitle: "Técnicos de Soporte", reportsTo: "Gerente de Sistemas", desc: "Resuelven problemas técnicos del personal." }
                            ]
                        }
                    ]
                },
                {
                    id: "agency_creative",
                    type: "GROUP_CREATIVE",
                    title: "AGENCIA CREATIVA",
                    subtitle: "Axis Creative House",
                    desc: "Foco: Branding, concepto de campaña, diseño y producción de contenido.",
                    children: [
                        { id: "role_ceo_cr", type: "ROLE", title: "CEO Creative Agency", subtitle: "Director General de la Agencia", reportsTo: "CEO Global", desc: "Líder comercial y estratégico de la unidad creativa." },
                        { id: "role_cco", type: "ROLE", title: "CCO - Chief Creative Officer", subtitle: "Director General Creativo", reportsTo: "CEO Agencia", desc: "El guardián de la calidad de las ideas; asegura que el producto creativo sea innovador y efectivo." },

                        {
                            id: "dept_strat", type: "DEPT_CREATIVE",
                            title: "Estrategia e Investigación", subtitle: "Strategic Planning",
                            children: [
                                { id: "role_cso", type: "ROLE", title: "CSO - Chief Strategy Officer", subtitle: "Director de Estrategia", reportsTo: "CEO Agencia", desc: "Determina el rumbo de la marca basado en datos y comportamientos del mercado." },
                                { id: "role_mr_mgr", type: "ROLE", title: "Market Research Manager", subtitle: "Gerente Inv. Mercados", reportsTo: "CSO", desc: "Lidera el diseño de estudios cualitativos y cuantitativos." },
                                { id: "role_mr_analyst", type: "ROLE", title: "Market Research Analyst", subtitle: "Analista de Investigación", reportsTo: "Gerente Investigación", desc: "Ejecuta el levantamiento de información y tendencias." },
                                { id: "role_planner", type: "ROLE", title: "Strategic Planner", subtitle: "Planeador Estratégico", reportsTo: "CSO", desc: "Traduce la investigación en el 'Creative Brief'." }
                            ]
                        },
                        {
                            id: "dept_acct", type: "DEPT_CREATIVE",
                            title: "Servicio al Cliente", subtitle: "Cuentas",
                            children: [
                                { id: "role_acct_dir", type: "ROLE", title: "Account Director", subtitle: "Director de Cuentas", reportsTo: "CEO Agencia", desc: "Responsable de la relación comercial a largo plazo." },
                                { id: "role_acct_exec", type: "ROLE", title: "Account Executive", subtitle: "Ejecutivo de Cuentas", reportsTo: "Director de Cuentas", desc: "El enlace diario. Recibe las necesidades del cliente." }
                            ]
                        },
                        {
                            id: "dept_traffic", type: "DEPT_CREATIVE",
                            title: "Tráfico Creativo", subtitle: "Creative Traffic",
                            children: [
                                { id: "role_traffic_mgr", type: "ROLE", title: "Traffic Manager", subtitle: "Director Tráfico Interno", reportsTo: "COO", desc: "Organiza la carga de trabajo de los creativos." },
                                { id: "role_traffic_coord", type: "ROLE", title: "Traffic Coordinator", subtitle: "Coordinador de Tráfico", reportsTo: "Traffic Manager", desc: "Supervisa el flujo diario de archivos." }
                            ]
                        },
                        {
                            id: "dept_creative_art", type: "DEPT_CREATIVE",
                            title: "Departamento Creativo", subtitle: "Creative & Art",
                            children: [
                                { id: "role_cd", type: "ROLE", title: "CD - Creative Director", subtitle: "Director Creativo", reportsTo: "CCO", desc: "Jefe de equipo que guía la conceptualización y aprueba las ideas." },
                                { id: "role_art_dir", type: "ROLE", title: "Art Director", subtitle: "Director de Arte", reportsTo: "Director Creativo", desc: "Crea el estilo visual, la estética y la identidad gráfica." },
                                { id: "role_copy", type: "ROLE", title: "Copywriter", subtitle: "Redactor Creativo", reportsTo: "Director Creativo", desc: "Crea el concepto verbal, slogans, guiones y la voz de la marca." },
                                { id: "role_g_des", type: "ROLE", title: "Graphic Designer", subtitle: "Diseñador Gráfico", reportsTo: "Director de Arte", desc: "Ejecuta visualmente las piezas bajo la guía del Director de Arte." }
                            ]
                        },
                        {
                            id: "dept_prod", type: "DEPT_CREATIVE",
                            title: "Producción & Post", subtitle: "Production Studio",
                            children: [
                                { id: "role_head_prod", type: "ROLE", title: "Head of Production", subtitle: "Director de Producción", reportsTo: "CCO", desc: "Responsable técnico y financiero de la realización física." },
                                { id: "role_exec_prod", type: "ROLE", title: "Executive Producer", subtitle: "Productor Ejecutivo", reportsTo: "Head of Production", desc: "Gestiona la logística externa y proveedores." },
                                { id: "role_video", type: "ROLE", title: "Videographer", subtitle: "Videógrafo", reportsTo: "Productor Ejecutivo", desc: "Opera cámaras e iluminación en los sets." },
                                { id: "role_post_lead", type: "ROLE", title: "Post-Production Lead", subtitle: "Director Post-prod", reportsTo: "Head of Production", desc: "Supervisa el acabado digital de imagen y sonido." },
                                { id: "role_editor", type: "ROLE", title: "Video Editor", subtitle: "Editor de Video", reportsTo: "Director Post-prod", desc: "Encargado de cortar, unir y montar el video final." },
                                { id: "role_motion", type: "ROLE", title: "Motion Designer", subtitle: "Animador", reportsTo: "Director Post-prod", desc: "Crea animaciones, gráficos en movimiento y efectos visuales." }
                            ]
                        }
                    ]
                },
                {
                    id: "agency_media",
                    type: "GROUP_MEDIA",
                    title: "AGENCIA DE MEDIOS",
                    subtitle: "Axis Media Labs",
                    desc: "Foco: Difusión de campaña, inversión publicitaria, optimización de pauta y data.",
                    children: [
                        { id: "role_ceo_media", type: "ROLE", title: "CEO Media Agency", subtitle: "Director General de Medios", reportsTo: "CEO Global", desc: "Responsable de la rentabilidad de la pauta y el cumplimiento de objetivos." },
                        { id: "role_cio", type: "ROLE", title: "CIO - Chief Investment Officer", subtitle: "Director de Negociación", reportsTo: "CEO Agencia", desc: "Logra acuerdos preferenciales y descuentos con medios." },

                        {
                            id: "dept_media_strat", type: "DEPT_MEDIA",
                            title: "Estrategia y Operaciones", subtitle: "Planning",
                            children: [
                                { id: "role_vp_plan", type: "ROLE", title: "VP of Media Planning", subtitle: "VP de Planeación", reportsTo: "CEO Agencia", desc: "Define el mix de canales ideal para alcanzar audiencia." },
                                { id: "role_dir_plan", type: "ROLE", title: "Media Planning Director", subtitle: "Director de Planeación", reportsTo: "VP of Planning", desc: "Supervisa la correcta ejecución del presupuesto total." },
                                { id: "role_media_traffic", type: "ROLE", title: "Media Traffic Coordinator", subtitle: "Tráfico de Medios", reportsTo: "Director de Planning", desc: "Receptor de material. Verifica specs y direcciona a especialistas." }
                            ]
                        },
                        {
                            id: "dept_execution", type: "DEPT_MEDIA",
                            title: "Especialistas por Canal", subtitle: "Execution Specialists",
                            children: [
                                { id: "role_off", type: "ROLE", title: "Offline Media Specialist", subtitle: "Especialista Offline", reportsTo: "Director de Planning", desc: "Gestiona pauta en TV, Radio, Revistas y Vallas (OOH)." },
                                { id: "role_sem", type: "ROLE", title: "SEM Specialist", subtitle: "Search", reportsTo: "Director de Planning", desc: "Maneja la publicidad pagada en buscadores (Google Ads)." },
                                { id: "role_seo", type: "ROLE", title: "SEO & AEO Specialist", subtitle: "Orgánico/IA", reportsTo: "Director de Planning", desc: "Optimiza webs para buscadores y motores de respuesta de IA." },
                                { id: "role_social", type: "ROLE", title: "Paid Social Specialist", subtitle: "Meta & TikTok", reportsTo: "Director de Planning", desc: "Configura y optimiza anuncios en redes sociales." },
                                { id: "role_prog", type: "ROLE", title: "Programmatic Trader", subtitle: "DV360", reportsTo: "Director de Planning", desc: "Compra espacios en tiempo real mediante subastas automáticas." },
                                { id: "role_tv", type: "ROLE", title: "YouTube & CTV Specialist", subtitle: "Video & Streaming", reportsTo: "Director de Planning", desc: "Gestiona pauta en video digital y televisión conectada." },
                                { id: "role_inf", type: "ROLE", title: "Influencer Marketing Specialist", subtitle: "Influencers", reportsTo: "Director de Planning", desc: "Gestiona pautas con creadores de contenido y podcasts." },
                                { id: "role_crm", type: "ROLE", title: "CRM & Email Marketing Specialist", subtitle: "CRM", reportsTo: "Director de Planning", desc: "Estrategia de bases de datos de clientes y envíos masivos." }
                            ]
                        },
                        {
                            id: "dept_data", type: "DEPT_MEDIA",
                            title: "Datos y Resultados", subtitle: "The Engine",
                            children: [
                                { id: "role_data_mgr", type: "ROLE", title: "Data & Analytics Manager", subtitle: "Gerente de Datos", reportsTo: "Director de Planning", desc: "Diseña la arquitectura de medición y los tableros de resultados." },
                                { id: "role_data_spec", type: "ROLE", title: "Data & Analytics Specialist", subtitle: "Especialista de Datos", reportsTo: "Gerente de Datos", desc: "Configura GA4, GTM y dashboards visuales." },
                                { id: "role_adops", type: "ROLE", title: "AdOps / Implementation Specialist", subtitle: "AdOps", reportsTo: "Especialista de Datos", desc: "Técnico que instala píxeles y códigos de rastreo." },
                                { id: "role_analyst", type: "ROLE", title: "Media Analyst", subtitle: "Analista de Medios", reportsTo: "Data Specialist", desc: "Operativo que apoya con reportes y monitoreo." }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

/* =========================
   2) RENDER LOGIC
   ========================= */

const orgRoot = document.getElementById("orgRoot");

// Helper to determine styles
function getNodeClass(type) {
    if (type.includes("SHARED")) return "shared";
    if (type.includes("CREATIVE")) return "creative";
    if (type.includes("MEDIA")) return "media";
    return "holding";
}

function createNodeElement(node) {
    const li = document.createElement("li");
    li.dataset.id = node.id;

    // Is this a Role (Leaf) or a Group (Container)?
    const isRole = node.type === "ROLE";
    const nodeClass = getNodeClass(node.type);

    const card = document.createElement("div");
    card.className = `node node-${nodeClass} ${isRole ? 'is-role' : 'is-group'}`;

    if (isRole) {
        // ROLE LAYOUT
        card.innerHTML = `
            <div class="role-content">
                <div class="role-title-en">${node.title}</div>
                <div class="role-title-es">${node.subtitle}</div>
                ${node.reportsTo ? `<div class="role-reports"><i class="fas fa-level-up-alt"></i> Reporta a: <strong>${node.reportsTo}</strong></div>` : ''}
            </div>
        `;
        // Modal Event for Details
        card.addEventListener("click", () => openModal(node));

    } else {
        // GROUP/DEPT LAYOUT
        // "No meteria cargos en esa tarjeta, sino al dar el +"
        card.innerHTML = `
            <div class="group-header">
                <div class="group-title">${node.title}</div>
                <div class="group-subtitle">${node.subtitle || ""}</div>
            </div>
            ${node.children && node.children.length ? `
                <button class="toggle-btn" title="Expandir/Contraer">
                    <i class="fas fa-plus icon-plus"></i>
                    <i class="fas fa-minus icon-minus"></i>
                </button>
            ` : ''}
        `;

        // Modal for Group details? Optional, but user said "deep dive" on roles.
        // We can still allow clicking the group to see desc.
        card.addEventListener("click", (e) => {
            if (!e.target.closest('.toggle-btn')) openModal(node);
        });
    }

    // Toggle Logic
    const toggle = card.querySelector(".toggle-btn");
    if (toggle) {
        toggle.addEventListener("click", (e) => {
            e.stopPropagation(); // Stop bubble
            li.classList.toggle("collapsed");
        });
    }

    li.appendChild(card);

    // Render Children
    if (node.children && node.children.length) {
        const ul = document.createElement("ul");
        node.children.forEach(child => {
            ul.appendChild(createNodeElement(child));
        });
        li.appendChild(ul);
    }

    return li;
}

function renderOrg(data) {
    orgRoot.innerHTML = "";
    const ul = document.createElement("ul");
    ul.appendChild(createNodeElement(data));
    orgRoot.appendChild(ul);

    // Initial State: Collapsed
    // Collapse all nodes that have children
    setTimeout(() => {
        document.querySelectorAll("li").forEach(li => {
            if (li.querySelector("ul")) li.classList.add("collapsed");
        });
        // Ensure Root is also collapsed so only "Axis Global Network" is visible
        const rootLi = orgRoot.querySelector("li");
        if (rootLi) rootLi.classList.add("collapsed");
    }, 0);
}

renderOrg(ORG_DATA);

/* =========================
   3) TOOLS
   ========================= */

// Canvas Pan/Zoom
const viewport = document.getElementById("viewport");
const canvas = document.getElementById("canvas");
let zoom = 1;
let isPanning = false;
let startX = 0, startY = 0, scrollLeft = 0, scrollTop = 0;

function setZoom(val) {
    zoom = Math.max(0.2, Math.min(3, val));
    canvas.style.transform = `scale(${zoom})`;
    document.getElementById("btnZoomReset").textContent = `${Math.round(zoom * 100)}%`;
}

document.getElementById("btnZoomIn").addEventListener("click", () => setZoom(zoom + 0.1));
document.getElementById("btnZoomOut").addEventListener("click", () => setZoom(zoom - 0.1));
document.getElementById("btnZoomReset").addEventListener("click", () => setZoom(1));
viewport.addEventListener("wheel", (e) => {
    if (e.ctrlKey) { e.preventDefault(); setZoom(zoom + (e.deltaY < 0 ? 0.1 : -0.1)); }
});

viewport.addEventListener("mousedown", (e) => {
    if (e.target.closest(".node") || e.target.closest("button")) return;
    isPanning = true; viewport.style.cursor = "grabbing";
    startX = e.pageX - viewport.offsetLeft; startY = e.pageY - viewport.offsetTop;
    scrollLeft = viewport.scrollLeft; scrollTop = viewport.scrollTop;
});
window.addEventListener("mousemove", (e) => {
    if (!isPanning) return; e.preventDefault();
    viewport.scrollLeft = scrollLeft - (e.pageX - viewport.offsetLeft - startX);
    viewport.scrollTop = scrollTop - (e.pageY - viewport.offsetTop - startY);
});
window.addEventListener("mouseup", () => { isPanning = false; viewport.style.cursor = "default"; });

// Expand/Collapse All
const allLis = () => document.querySelectorAll("li");
document.getElementById("btnExpandAll").addEventListener("click", () => {
    allLis().forEach(li => li.classList.remove("collapsed"));
});
document.getElementById("btnCollapseAll").addEventListener("click", () => {
    allLis().forEach(li => {
        if (li.querySelector("ul")) li.classList.add("collapsed");
    });
    // Reset view to top-left to focus on root
    viewport.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
});

/* =========================
   4) MODAL
   ========================= */
const overlay = document.getElementById("modalOverlay");
const mTitle = document.getElementById("modalTitle");
const mMeta = document.getElementById("modalMeta");
const mDesc = document.getElementById("modalDesc");

function openModal(node) {
    mTitle.textContent = node.title;
    mMeta.textContent = node.subtitle || "";
    mDesc.innerHTML = `
        <p>${node.desc || ""}</p>
        ${node.reportsTo ? `<div style="margin-top:10px; font-weight:600; color:#444;">Reporta a: ${node.reportsTo}</div>` : ''}
    `;
    overlay.classList.add("active");
}
document.getElementById("modalClose").addEventListener("click", () => overlay.classList.remove("active"));
document.getElementById("modalOk").addEventListener("click", () => overlay.classList.remove("active"));
window.addEventListener("keydown", (e) => { if (e.key === "Escape") overlay.classList.remove("active") });
