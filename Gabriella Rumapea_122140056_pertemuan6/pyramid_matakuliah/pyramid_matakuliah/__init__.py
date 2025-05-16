from pyramid.response import Response
from pyramid.config import Configurator
from sqlalchemy import engine_from_config
from sqlalchemy.orm import sessionmaker

def cors_tween_factory(handler, registry):
    def cors_tween(request):
        if request.method == 'OPTIONS':
            response = Response()
        else:
            response = handler(request)
        response.headers.update({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        })
        return response
    return cors_tween

def main(global_config, **settings):
    config = Configurator(settings=settings)

    # --- FIX INI YANG KURANG DARI PUNYA KAMU ---
    # Setup SQLAlchemy engine & session factory
    engine = engine_from_config(settings, 'sqlalchemy.')
    session_factory = sessionmaker(bind=engine)

    def dbsession(request):
        session = session_factory()
        request.add_finished_callback(lambda req: session.close())
        return session

    config.add_request_method(dbsession, 'dbsession', reify=True)
    # --- END FIX ---

    config.add_tween('pyramid_matakuliah.cors_tween_factory')
    # Routing & View Scan
    config.include('.routes')
    config.scan()
    return config.make_wsgi_app()
