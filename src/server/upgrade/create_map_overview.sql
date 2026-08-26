-- ============================================================
-- PATCH: Create map_overview table
-- ============================================================

BEGIN;

CREATE SEQUENCE IF NOT EXISTS public.map_overview_id_seq;

CREATE TABLE IF NOT EXISTS public.map_overview
(
    id              INTEGER           NOT NULL DEFAULT nextval('map_overview_id_seq'::regclass),
    project_id      UUID              NOT NULL,
    version         CHARACTER VARYING,
    config          JSON,
    data_location   CHARACTER VARYING,
    qgis_file       CHARACTER VARYING,

    CONSTRAINT pk_map_overview
        PRIMARY KEY (id, project_id),

    CONSTRAINT fk_map_overview_project_id_project
        FOREIGN KEY (project_id)
        REFERENCES public.project (id)
        ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS ix_map_overview_project_id
    ON public.map_overview (project_id ASC NULLS LAST);

CREATE INDEX IF NOT EXISTS ix_map_overview_version
    ON public.map_overview (version ASC NULLS LAST);

COMMIT;